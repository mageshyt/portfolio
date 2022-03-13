import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "69g8kf8o",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk46Vhk2aPbHwQ6PuqjVk8q41ja4dvOWH5l2ov9Q6tzBbIeCPy3bXZsh24OmJg3KACl1mj3gESulfRJ3pjouj7RKTS3fkqrLDyd0sW8CmNk0EkL92AEBkdpgaCWEtgwcLCi7FMHS4RXBeyYewaAemhSe0QxC3G3n8EsKZz0YjpRf1LgnQfE0",
  useCdn: false,
});
