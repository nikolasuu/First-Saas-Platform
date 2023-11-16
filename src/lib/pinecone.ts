// import {Pinecone} from "@pinecone-database/pinecone"

// export const pinecone = new Pinecone({
//     environment: "gcp-starter",  
//     apiKey: process.env.PINECONE_API_KEY!,
// })

import { PineconeClient } from '@pinecone-database/pinecone';

export const getPineconeClient = async () => {
  const client = new PineconeClient()

  await client.init({      
    environment: "gcp-starter",  
    apiKey: process.env.PINECONE_API_KEY!,
  })

  return client
}