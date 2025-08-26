const string = "Streaming/GetVotingEligibility/42745b97-8448-f011-877e-000d3a593383/eb10cfa5-24eb-ef11-a734-000d3a593383/100000002";
const splitParts = string.split(/\//);
const last3Parts = splitParts.slice(-3);
console.log(splitParts);
console.log(last3Parts); 