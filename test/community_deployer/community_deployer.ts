import { expect } from "../shared/expect";
import { ethers, network } from "hardhat";
import { CommunityDeployer } from "../../typechain/CommunityDeployer";
import { advanceTimeAndBlock } from "../helpers/time";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { MockGenesisNFT } from "../../typechain";

/// CONSTANTS
const MASTER_VAMM_ADDRESS = "0x067232D22d5bb8DC7cDaBa5A909ac8b089539462"; // dummy value
const MASTER_MARGIN_ENGINE_ADDRESS = "0x067232D22d5bb8DC7cDaBa5A909ac8b089539462"; // dummy value
const QUORUM_VOTES = 1;



describe("CommunityDeployer", () => {
  // below tests work under the assumption that the quorum is 1
  // in order to test with the original nft, need to fork mainnet and impersonate
  // add tests (with skip) that check the constants such as quorum, master margin engine and master vamm

  let communityDeployer: CommunityDeployer;
  let mockGenesisNFT: MockGenesisNFT;
  let abSigner: SignerWithAddress;

  beforeEach(async () => {

    // deploy mock genesis nft
    const mockGenesisNFTFactory = await ethers.getContractFactory("MockGenesisNFT");
    mockGenesisNFT = (await mockGenesisNFTFactory.deploy()) as MockGenesisNFT;

    // owner address in the wallet address

    // generate a merkle root


    // IVAMM _masterVAMM,
    // IMarginEngine _masterMarginEngine,
    // address _voltzGenesisNFT
    // uint256 _quorumVotes,
    // address _ownerAddress,
    // bytes32 _merkleRoot

    // todo: pass correct values

    // deploy community deployer

    const communityDeployerFactory = await ethers.getContractFactory(
      "CommunityDeployer"
    );

    communityDeployer =
      (await communityDeployerFactory.deploy()) as CommunityDeployer;

    const abAddress = "0x067232D22d5bb8DC7cDaBa5A909ac8b089539462";

    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [abAddress],
    });

    abSigner = await ethers.getSigner(abAddress);
  });

  it("correctly casts a yes vote", async () => {
    const tokenId = "679616669464162953633912649788656402604891550845";

    await communityDeployer.connect(abSigner).castVote(tokenId, true); // true --> yes vote

    const yesVoteCount = await communityDeployer.yesVoteCount();

    expect(yesVoteCount).to.eq(1);
  });

  it("correctly casts a no vote", async () => {
    const tokenId = "679616669464162953633912649788656402604891550845";

    await communityDeployer.connect(abSigner).castVote(tokenId, false); // false --> no vote

    const noVoteCount = await communityDeployer.noVoteCount();

    expect(noVoteCount).to.eq(1);
  });

  it("fails to cast a vote if does not own the genesis nft", async () => {
    const tokenId = "1348980968939277319790359517796813954796348367904";

    await expect(
      communityDeployer.connect(abSigner).castVote(tokenId, true)
    ).to.be.revertedWith("only token owner");
    await expect(
      communityDeployer.connect(abSigner).castVote(tokenId, false)
    ).to.be.revertedWith("only token owner");
  });

  it("fails to cast a duplicate vote", async () => {
    const tokenId = "679616669464162953633912649788656402604891550845";

    await communityDeployer.connect(abSigner).castVote(tokenId, true); // true --> yes vote

    const yesVoteCount = await communityDeployer.yesVoteCount();

    expect(yesVoteCount).to.eq(1);

    await expect(
      communityDeployer.connect(abSigner).castVote(tokenId, true)
    ).to.be.revertedWith("duplicate vote");
  });

  it("fails to cast a vote once the voting period is over", async () => {
    const tokenId = "679616669464162953633912649788656402604891550845";
    await advanceTimeAndBlock(BigNumber.from(172801), 1);
    await expect(communityDeployer.castVote(tokenId, true)).to.be.revertedWith(
      "voting period over"
    );
  });

  it("unable to queue if voting period is not over", async () => {
    await expect(communityDeployer.queue()).to.be.revertedWith(
      "voting is ongoing"
    );
  });

  it("unable to queue if quorum is not reached", async () => {
    await advanceTimeAndBlock(BigNumber.from(172801), 1); // make sure the voting period is over
    await expect(communityDeployer.queue()).to.be.revertedWith(
      "quorum not reached"
    );
  });

  it("unable to queue if no votes >= yes votes", async () => {
    const tokenId = "679616669464162953633912649788656402604891550845";
    await communityDeployer.connect(abSigner).castVote(tokenId, true); // true --> yes vote
    const yesVoteCount = await communityDeployer.yesVoteCount();
    expect(yesVoteCount).to.eq(1); // the quorum is reached

    const anotherTokenId = "851623991281074935064194053396682782023750630549";
    await communityDeployer.connect(abSigner).castVote(anotherTokenId, false); // false --> no vote
    const noVoteCount = await communityDeployer.noVoteCount();
    expect(noVoteCount).to.eq(1); // number of no votes == number of yes votes
    await advanceTimeAndBlock(BigNumber.from(172801), 1); // make sure the voting period is over
    await expect(communityDeployer.queue()).to.be.revertedWith("no >= yes");
  });

  it("unable to deploy if not queued", async () => {
    const tokenId = "679616669464162953633912649788656402604891550845";
    await communityDeployer.connect(abSigner).castVote(tokenId, true); // true --> yes vote
    const yesVoteCount = await communityDeployer.yesVoteCount();
    expect(yesVoteCount).to.eq(1); // the quorum is reached
    await advanceTimeAndBlock(BigNumber.from(172801), 1); // make sure the voting period is over
    await expect(communityDeployer.deploy()).to.be.revertedWith("not queued");
  });

  it("unable to deploy if timelock period is not over", async () => {
    const tokenId = "679616669464162953633912649788656402604891550845";
    await communityDeployer.connect(abSigner).castVote(tokenId, true); // true --> yes vote
    const yesVoteCount = await communityDeployer.yesVoteCount();
    expect(yesVoteCount).to.eq(1); // the quorum is reached
    await advanceTimeAndBlock(BigNumber.from(172801), 1); // make sure the voting period is over
    await communityDeployer.queue();
    await expect(communityDeployer.deploy()).to.be.revertedWith(
      "timelock is ongoing"
    );
  });

  it("voltz factory is successfully deployed", async () => {
    const tokenId = "679616669464162953633912649788656402604891550845";
    await communityDeployer.connect(abSigner).castVote(tokenId, true); // true --> yes vote
    const yesVoteCount = await communityDeployer.yesVoteCount();
    expect(yesVoteCount).to.eq(1); // the quorum is reached
    await advanceTimeAndBlock(BigNumber.from(172801), 1); // make sure the voting period is over
    await communityDeployer.queue();
    await advanceTimeAndBlock(BigNumber.from(172801), 1); // make sure the timelock is over
    await communityDeployer.deploy();
    const factoryAddress = await communityDeployer.voltzFactory();
    expect(factoryAddress).to.not.eq("0"); // make sure this test works

    // todo: check master margin engine and master vamm
  });
});
