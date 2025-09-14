export type SlideData = {
  title: string;
  subtitle?: string;
  keyPoints: string[];
};

export const slidesData: SlideData[] = [
  {
    title: 'Securing Our Future: Online Donation Portal Security',
    subtitle: 'A Policy Framework for Mindoro State University',
    keyPoints: [
      'Purpose: Restore donor trust and prevent future data breaches.',
      'Scope: Applies to all university IT staff, third-party vendors, and departments involved with the donation portal.',
      'Core Goal: Protect sensitive financial and personal donor data.',
    ],
  },
  {
    title: 'The "Why": Our Commitment to Security',
    subtitle: 'Policy Statement',
    keyPoints: [
      "Problem: The university's donation portal suffered a data breach.",
      'Impact: Damaged reputation, loss of donor trust, and suspended online donations.',
      'Solution: Establish a robust security framework to protect donor information and ensure regulatory compliance.',
    ],
  },
  {
    title: 'Non-Negotiable Security Standards',
    subtitle: 'Mandatory Requirements',
    keyPoints: [
      'Payment Processing: Use a PCI DSS-compliant service provider. Do not store cardholder data on university servers.',
      'Vulnerability Testing: Conduct quarterly vulnerability scans and penetration tests by a third party. Remediate critical issues within 7 days.',
      'Secure Coding: Develop and review all code to prevent common vulnerabilities (XSS, SQL Injection).',
      'Access Control: Use Multi-Factor Authentication (MFA) for all server and database access.',
    ],
  },
  {
    title: 'A Step-by-Step Approach',
    subtitle: 'Procedures',
    keyPoints: [
      'Change Management: All code changes must go through a formal request system.',
      'Code Review: Security flaws must be reviewed by a separate developer before deployment.',
      'Scanning: Applications must pass an automated security scan pre-deployment.',
      'Verification: A brief vulnerability scan is performed immediately after deployment to ensure no new weaknesses.',
    ],
  },
  {
    title: 'Recommended Security Practices',
    subtitle: 'Best Practices (Guidelines)',
    keyPoints: [
      'Segregated Networks: Use separate networks and privileged access management (PAM) for production work.',
      'Regular Updates: Keep all software and libraries updated to the latest secure versions.',
      'Data Minimization: Anonymize or tokenize transaction data whenever possible.',
    ],
  },
  {
    title: 'Who is Accountable?',
    subtitle: 'Roles and Responsibilities',
    keyPoints: [
      'IT Department: Implements and monitors policy enforcement.',
      'End Users: Responsible for data handling, reporting, and policy compliance.',
      'Management: Approves and supports policy enforcement.',
    ],
  },
  {
    title: 'Building a Security-Conscious Culture',
    subtitle: 'Security Education, Training, and Awareness (SETA)',
    keyPoints: [
      'Phishing Simulations: Test staff awareness and provide secure coding training for IT personnel.',
      'Annual Awareness Session: Provide mandatory training on PCI DSS and data handling for all staff.',
      'Tabletop Exercise: Conduct an incident response exercise to prepare for a security breach.',
    ],
  },
  {
    title: 'The Path to Restoring Trust',
    subtitle: 'Conclusion',
    keyPoints: [
      'Summary: This policy is the foundation for restoring donor trust and protecting a critical revenue stream.',
      'Action: A comprehensive policy demonstrates a serious commitment to security.',
      "Next Steps: Implement the policy, conduct training, and regularly review security posture to ensure the portal's continued safety.",
    ],
  },
];
