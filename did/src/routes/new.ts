import express, { Request, Response } from 'express';
import { requireAuth } from '@sparkleid/common';
import { PrivateKey } from '@hashgraph/sdk';
const { HcsDid, HcsDidRootKey, HcsDidDocument, HcsIdentityNetworkBuilder } = require("@hashgraph/did-sdk-js");
// import { createClient } from '../client';
import { Client, FileId, TopicCreateTransaction, Hbar } from '@hashgraph/sdk';

const router = express.Router();

const network = 'network';

router.post('/api/dids', requireAuth as any, async (req: Request, res: Response) => {

    // Ensure operator credentials are set
    if (!process.env.OPERATOR_ID || !process.env.OPERATOR_KEY) {
        throw new Error('OPERATOR_ID and OPERATOR_KEY must be defined');
    }

    // Initialize Hedera client
    const client = Client.forTestnet();
    client.setOperator(process.env.OPERATOR_ID, process.env.OPERATOR_KEY);

    const didPrivateKey = PrivateKey.generate();
    const didPublicKey = didPrivateKey.publicKey;


    try {
        // Create a new topic
        const transactionResponse = await new TopicCreateTransaction()
            .setTopicMemo("My DID Topic")
            .setAdminKey(didPrivateKey) // Optional: Admin key for topic management
            .setSubmitKey(didPublicKey) // Optional: Submit key for message submission
            .setMaxTransactionFee(new Hbar(2)) // Set max transaction fee
            .execute(client);

        // Get the receipt of the transaction
        const receipt = await transactionResponse.getReceipt(client);

        console.log(receipt)
    } catch (e) {
        console.error("Error creating topic", e);
    }
    

    try {
        const client = Client.forTestnet();
        if (!process.env.OPERATOR_ID || !process.env.OPERATOR_KEY) {
            throw new Error('OPERATOR_ID and OPERATOR_KEY must be defined');
        }
        client.setOperator(process.env.OPERATOR_ID, process.env.OPERATOR_KEY);

        

        const addressBook = '0.0.24352';

        const did = new HcsDid(network, didPublicKey, FileId.fromString(addressBook));

        console.log("DID created successfully!");

        const didString = did.toString();
        console.log(didString);


    } catch (e) {
        console.error("Error creating DID", e);
    }
    
    res.sendStatus(200)   
    
})

export { router as createDidRouter };