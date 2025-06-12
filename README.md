LightDao
WHERE ART MEETS IMPACT

A Faith-Driven Web3 Platform for Art and Giving


🌟 Mission & Vision
Mission: To provide a blockchain-based marketplace where Christian artists can sell their digital art, with proceeds directly supporting charity mission projects worldwide.

Vision: To become the premier global platform connecting millions of Christian artists and worldwide art enthusiasts with mission projects, leveraging blockchain technology to ensure transparency, fairness, and direct impact.

🚀 Overview
LightDao is a revolutionary platform that bridges the gap between Christian artists and mission work through blockchain technology. Our platform enables:

Artists to showcase and monetize their digital art while supporting faith-based causes
Donors to support projects with full transparency and receive NFT rewards
Mission Projects to receive direct funding with automated distribution
Admins to manage and oversee platform operations

🔧 Technology Stack
Frontend
Framework: Next.js with TypeScript
Styling: Sass, Chakra UI, Tailwind CSS
Routing: React Router
State Management: Context API (lightweight approach)
Testing: Mocha and Chai for integration testing
Blockchain
Network: Solana
Wallet Integration: Phantom Wallet
Smart Contracts: Rust-based Solana programs
Deployment & Analytics
Hosting: Netlify
Analytics: Google Analytics
Version Control: Git with Gitflow strategy
🎨 Design System
Color Palette
Primary: 
#633bc9
Secondary: 
#F4C952
Primary Light: 
#633bc9 (20% opacity)
Dark: 
#252525
Grey: 
#EBF0F0
Design Philosophy
Clean and modern styling inspired by productivity apps like Notion, Asana, and ClickUp.

📱 Platform Architecture
User Roles
Donors - Support projects and receive impact tracking
Creators/Artists - Create and manage art projects
Admins - Oversee platform operations and approvals
Project Lifecycle
[Draft] → [Submitted for Review] → [Pending Activation] → [Active] → [Completed]
                    ↓
              [Needs Revision] / [Rejected]
🗂️ Project Structure
src/
├── components/           # Reusable UI components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Global styles and themes
├── blockchain/          # Blockchain integration
├── types/               # TypeScript type definitions
└── tests/               # Test files
🛣️ Routes Overview
Public Routes
/ - Landing page
/creator/{publickey} - Creator profile page
/connect - Wallet connection
Donor Routes
/my-impact - Personal impact dashboard
/my-impact/project/{projectkey} - Project details
/explore - Discover projects
Creator Routes
/dashboard - Creator dashboard
/draft-list - Draft projects
/projects - Active projects
/projects/{projectkey} - Project management
Admin Routes
/statistic - Platform statistics
/management - Project approvals
/withdraw - Fund management
🚀 Getting Started
Prerequisites
Node.js (v18 or higher)
npm or yarn
Phantom Wallet (for blockchain interactions)
Installation
Clone the repository
bash
git clone https://github.com/your-org/lightdao.git
cd lightdao
Install dependencies
bash
npm install
# or
yarn install
Set up environment variables
bash
cp .env.example .env.local
Configure your environment variables:
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=your-rpc-endpoint
NEXT_PUBLIC_GA_TRACKING_ID=your-ga-id
Run the development server
bash
npm run dev
# or
yarn dev
Open your browser Navigate to http://localhost:3000
🧪 Testing
Run the test suite:

bash
npm run test
# or
yarn test
For integration tests:

bash
npm run test:integration
# or
yarn test:integration
📦 Build & Deployment
Production Build
bash
npm run build
# or
yarn build
Deploy to Netlify
The project is configured for automatic deployment to Netlify. Simply push to the main branch to trigger deployment.

🔄 Development Workflow
We use Gitflow branching strategy:

main - Production-ready code
develop - Integration branch for features
feature/* - Feature development branches
release/* - Release preparation branches
hotfix/* - Emergency fixes
Branch Naming Convention
feature/wallet-integration
bugfix/navigation-issue
hotfix/critical-security-patch
📝 Code Standards
Code Quality
ESLint and Prettier for code formatting
Maximum 300 lines per file
Clean, readable code prioritized over optimization
TypeScript for type safety
Commit Messages
Follow conventional commits:

feat: add wallet connection functionality
fix: resolve navigation panel collapse issue
docs: update API documentation
🔐 Blockchain Integration
Wallet Connection
Solana Phantom wallet integration
Automatic wallet detection
Secure transaction signing
Smart Contract Features
Project vault management
Automated fee distribution
Transparent fund tracking
NFT minting and distribution
🎯 Key Features
For Donors
My Impact Dashboard - Track donations and impact
Project Exploration - Discover and support projects
NFT Rewards - Receive digital artwork as appreciation
For Creators
Project Management - Create and manage art projects
Draft System - Save and edit projects before submission
Analytics Dashboard - Track project performance
For Admins
Approval Workflow - Review and approve projects
Platform Statistics - Monitor platform health
Fund Management - Oversee platform treasury
🤝 Contributing
We welcome contributions! Please read our Contributing Guidelines before submitting pull requests.

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

📞 Support & Contact
Website: thelightdao.com
Email: support@lightdao.org
Discord: Join our community
Twitter: @TheLightDao
🙏 Acknowledgments
Christian artist community for inspiration
Solana ecosystem for blockchain infrastructure
Open source contributors
Built with ❤️ and faith by the LightDao team

"Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." - Matthew 5:16

