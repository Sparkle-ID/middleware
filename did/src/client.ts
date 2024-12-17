import { Client, PrivateKey } from '@hashgraph/sdk';


async function createClient() {
    const client = Client.forTestnet();
    if (!process.env.OPERATOR_ID || !process.env.OPERATOR_KEY) {
        throw new Error('OPERATOR_ID and OPERATOR_KEY must be defined');
    }
    client.setOperator(process.env.OPERATOR_ID, process.env.OPERATOR_KEY);
    return client;
}

export { createClient };