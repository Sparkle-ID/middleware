# Sparkle ID Middleware

Welcome to the Sparkle ID Middleware repository. This microservice architecture powers the backend for Sparkle ID, a decentralized identity and credential management system built on Hedera Hashgraph.

## Overview

The Sparkle ID Middleware is designed to facilitate communication between the front-end application, Hedera Hashgraph services, and smart contracts. It handles identity creation, credential issuance, and secure data storage using Hedera File Service (HFS).

## Features

- **Decentralized Identity (DID) Management**: Generate and manage DIDs using Hedera DID SDK.
- **Verifiable Credentials (VCs)**: Create, issue, and store VCs.
- **Secure Data Storage**: Use HFS for storing credential metadata.
- **Authentication**: Hybrid authentication using JWTs, email/password, and Web3 private keys.

## Tech Stack

- **Node.js**: Backend runtime.
- **Express.js**: API framework.
- **Hedera SDK**: Integration with Hedera Hashgraph.
- **MongoDB** (optional): For additional data persistence.

## Architecture

The middleware uses a microservice-based architecture with the following core services:

1. **Auth Service**: Manages user authentication and permissioning.
2. **DID Service**: Handles creation and management of decentralized identities.
3. **Credential Service**: Issues and manages verifiable credentials.
4. **File Storage Service**: Interfaces with Hedera File Service for storing credential metadata.

## Getting Started

### Prerequisites

- Skaffold
- Docker
- MongoDB (optional for persistence)
- Hedera Testnet/Mainnet Account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sparkle-ID/middleware.git
   cd middleware
   ```
2. Configure environment variables in `.env` file:
   ```env
   HEDERA_NETWORK=testnet
   HEDERA_ACCOUNT_ID=<Your Hedera Account ID>
   HEDERA_PRIVATE_KEY=<Your Private Key>
   JWT_SECRET=<Your JWT Secret>
   MONGODB_URI=<Your MongoDB Connection String> # Optional
   ```
3. Start the application using Skaffold:
   ```bash
   skaffold dev
   ```

### API Endpoints

#### Authentication
- `POST /auth/signup`: Register a new user.
- `POST /auth/signin`: Authenticate a user and return a JWT.

#### DID Management
- `POST /api/did`: Create a new DID.
- `GET /api/did/:id`: Retrieve DID details.

#### Credential Management
- to be completed

### Running Tests

Run the test suite with:
```bash
npm test
```

## Deployment

To deploy the middleware, consider using cloud services like AWS, Azure, or Google Cloud. Use Docker for containerization if needed.

## Contributing

We welcome contributions! Please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For more information, please reach out at [contact@sparkleid.com](mailto:contact@sparkleid.com).

