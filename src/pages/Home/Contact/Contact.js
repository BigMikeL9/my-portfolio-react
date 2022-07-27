import React from "react";

import { ContactSection } from "./Contact.style";
import { SectionInner } from "../../../layout/Section/Section.style";
import { H2 } from "../../../styles/Typography.style";
import Divider from "../../../components/UI/Divider/Divider";
import { MailToLink } from "../../../components/UI/MailToLink/MailToLink.style";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionInner>
        <H2>Get In Touch</H2>
        <Divider />

        <MailToLink href="mailto:mikel1832yahoo.com">
          mikel1832yahoo.com
        </MailToLink>
      </SectionInner>
    </ContactSection>
  );
};

export default Contact;
