export type LegalPageId = "terms" | "privacy"

export const legalNav = [
  { id: "terms" as const, label: "Terms of Use", href: "/terms" },
  { id: "privacy" as const, label: "Privacy Policy", href: "/privacy" },
]

export const privacySections = [
  {
    title: "INTRODUCTION",
    paragraphs: [
      "Welcome to our Privacy policy relating to the use of the Website www.alphabe.io. We respect your privacy and are committed to protect your personal data and processing in compliance with applicable laws including but not limited to Regulation (EU) 2016/679) of the European Parliament and the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) – the “GDPR”.",
      "This Privacy Policy will inform you as to how we look after your personal data when you visit our Website, and tell you about your privacy rights and how the law protects you.",
    ],
  },
  {
    title: "INTRODUCTION",
    paragraphs: [
      "The Data Controller of Your Personal Data is Alphabe (the “Company,” “We,” “Us,” “Our”). The purpose of this Privacy Policy is to inform You of how the Company collects, processes, uses, stores and protects Your Personal Data as well as your rights with respect to the processing of Your Personal Data.",
    ],
    bullets: [
      "By visiting Our Website and participating in the Campaign, You hereby acknowledge reading and fully accepting the terms set out in this Privacy Policy.",
      "The Company acknowledges that, in collecting Your Personal Data, We are bound by the laws of Malta and will process Your Personal Data in accordance with the GDPR. For any further request or query about how We use Your Personal Data, You may address Our Data Protection Officer through the following email address: dpo@alphabe.io.",
      "Any notice, demand, request or other communication which You address to the Company shall be sent by e-mail to legal@alphabe.io. All communication done by e-mail shall be deemed received on the business day following the day of transmission.",
    ],
  },
  {
    title: "Definitions",
    paragraphs: [
      "Capitalised terms in this Policy shall have the meaning assigned to them under the GDPR or the Terms and Conditions of this Website and shall be construed accordingly. Furthermore, the following definitions shall apply:",
    ],
  },
  {
    title: "INTRODUCTION",
    paragraphs: [
      "The Data Controller of Your Personal Data is Alphabe (the “Company,” “We,” “Us,” “Our”). The purpose of this Privacy Policy is to inform You of how the Company collects, processes, uses, stores and protects Your Personal Data as well as your rights with respect to the processing of Your Personal Data.",
    ],
    bullets: [
      "By visiting Our Website and participating in the Campaign, You hereby acknowledge reading and fully accepting the terms set out in this Privacy Policy.",
      "The Company acknowledges that, in collecting Your Personal Data, We are bound by the laws of Malta and will process Your Personal Data in accordance with the GDPR. For any further request or query about how We use Your Personal Data, You may address Our Data Protection Officer through the following email address: dpo@alphabe.io.",
      "Any notice, demand, request or other communication which You address to the Company shall be sent by e-mail to legal@alphabe.io. All communication done by e-mail shall be deemed received on the business day following the day of transmission.",
    ],
  },
] as const

export const termsSections = [
  {
    title: "INTRODUCTION",
    paragraphs: [
      "Welcome to the Alphabe Terms of Use. These terms govern your access to and use of the Website and related services operated by Alphabe.",
      "By accessing or using our Website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use the Website.",
    ],
  },
  {
    title: "USE OF THE WEBSITE",
    paragraphs: [
      "You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to use the Website in any way that violates applicable laws or regulations, or that may damage, disable, or impair the Website.",
    ],
    bullets: [
      "You must not attempt to gain unauthorized access to any part of the Website, servers, or networks connected to the Website.",
      "You must not use the Website to transmit any harmful code, spam, or misleading content.",
      "Alphabe reserves the right to suspend or terminate access for users who violate these Terms.",
    ],
  },
  {
    title: "INTELLECTUAL PROPERTY",
    paragraphs: [
      "All content, trademarks, logos, and materials on the Website are owned by Alphabe or its licensors and are protected by applicable intellectual property laws.",
    ],
  },
  {
    title: "CONTACT",
    paragraphs: [
      "For questions about these Terms of Use, please contact us at legal@alphabe.io.",
    ],
  },
] as const
