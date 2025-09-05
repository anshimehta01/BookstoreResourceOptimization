# 🌐 Resource Optimization in Virtualized Cloud Environment

This project demonstrates how **Infrastructure as Code (IaC)** using **Terraform** can be used to deploy and optimize a **MERN stack bookstore application** on **Amazon Web Services (AWS)**.  
It focuses on **automation, scalability, security, and cost efficiency** in cloud deployments.

---

## 🚀 Features
- ✅ Automated infrastructure provisioning with **Terraform**
- ✅ Custom **VPC**, Subnets, IGW, Route Tables, and Security Groups
- ✅ **EC2 instance** setup with `user_data` automation
- ✅ Application deployment directly from **GitHub**
- ✅ **Application Load Balancer (ALB)** for traffic distribution
- ✅ **CloudWatch alarms** & **SNS alerts** for monitoring
- ✅ **Lambda + EventBridge** to auto-stop idle instances
- ✅ **AWS Budget** integration for cost tracking

---

## 🛠️ Tech Stack
- **Cloud Platform**: AWS (VPC, EC2, ALB, CloudWatch, Lambda, SNS, Budgets)  
- **IaC Tool**: Terraform  
- **Application Stack**: MERN (MongoDB, Express.js, React.js, Node.js)  
- **Version Control**: GitHub  

---

## ⚙️ System Architecture
- **VPC** with public & private subnets  
- **Security Groups** to control inbound/outbound traffic  
- **EC2 instance** hosting the MERN bookstore application  
- **GitHub integration** for automatic updates

📂 Project Structure
/infrastructure   -> Terraform scripts
/frontend         -> React application
/backend          -> Node.js + Express API

🔧 Implementation

Terraform automation for reproducible deployments

EC2 user_data script to install Node.js, pull GitHub repo, and start app

Monitoring & cost optimization with CloudWatch + AWS Budget

🧩 Challenges & Solutions

Terraform dependency issues → Fixed with depends_on

Environment variable errors → Exported via user_data script

Port conflicts on EC2 → Added pre-start cleanup script

GitHub integration errors → Configured SSH keys for smoother deployment

🔮 Future Enhancements

🔹 CI/CD pipeline using GitHub Actions or AWS CodePipeline

🔹 Domain setup with Route 53 & SSL via ACM

🔹 Security upgrades (Bastion Host, WAF, IAM role restrictions)
