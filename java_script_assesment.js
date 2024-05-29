// Step 1: Create a variable to hold the  NFTs
let nfts = [];

// Step 2: Function to mint an NFT
function mintNFT(name, startup_Name, industry, notable_Achievement, experience_Years, background, specialSkill, investorRating) {
    // Create an object with metadata of the co founders 
    const nft = {
        name: name,
        startup_Name: startup_Name,
        industry: industry,
        notable_Achievement: notable_Achievement,
        experience_Years: experience_Years,
        background: background,
        specialSkill: specialSkill,
        investorRating: investorRating
    };
    // Store the NFT object in the array
    nfts.push(nft);
}

// Step 3: Function to list all NFTs
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("NFT " + (i + 1) + ":");
        console.log("Name: " + nfts[i].name);
        console.log("Startup Name: " + nfts[i].startup_Name);
        console.log("Industry: " + nfts[i].industry);
        console.log("Notable Achievement: " + nfts[i].notable_Achievement);
        console.log("Experience Years: " + nfts[i].experience_Years);
        console.log("Background: " + nfts[i].background);
        console.log("Special Skill: " + nfts[i].specialSkill);
        console.log("Investor Rating: " + nfts[i].investorRating);
        console.log('___________________________________');
    }
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply() {
    console.log("Total Supply: " + nfts.length);
}

// Example usage
mintNFT('Ritesh Agarwal', 'OYO ', 'Hospitality', 'Youngest Self-Made Billionaire', 10, 'Small Town', 'Growth Hacking', '5/5');
mintNFT('Kunal Bahl', 'Snapdeal', 'E-commerce', 'Largest Online Marketplace in India', 15, 'Engineering', 'Strategic Partnerships', '4.5/5');
mintNFT('Bhavish Aggarwal', 'Ola Cabs', 'Transportation', 'Leading Ride-Sharing Company in India', 12, 'IT Professional', 'Market Penetration', '5/5');
mintNFT('Vijay Shekhar Sharma', 'Paytm', 'Fintech', 'Revolutionized Digital Payments', 20, 'Engineer', 'Innovation', '4.8/5');
mintNFT('Naveen Tewari', 'InMobi', 'Advertising', 'Global Mobile Advertising Leader', 18, 'Harvard MBA', 'Leadership', '4.7/5');
mintNFT('Deepinder Goyal', 'Zomato', 'Food Tech', 'Leading Food Delivery Service', 14, 'Consultant', 'User Experience', '4.6/5');
mintNFT('Byju Raveendran', 'BYJU\'s', 'EdTech', 'Largest EdTech Company in India', 10, 'Teacher', 'Content Creation', '5/5');
mintNFT('Falguni Nayar', 'Nykaa', 'Beauty', 'Leading Online Beauty Retailer', 25, 'Investment Banker', 'Brand Building', '4.9/5');
mintNFT('Kiran Mazumdar-Shaw', 'Biocon', 'Biotechnology', 'Pioneering Biotech in India', 40, 'Biotechnologist', 'Scientific Innovation', '5/5');

console.log('List of NFTs:');
listNFTs();

getTotalSupply();
