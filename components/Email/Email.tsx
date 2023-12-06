import styles from './Email.module.scss';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components';

interface EmailProps {
  name: string;
  emailAddress: string;
  content: string;
}

const Email: React.FC<EmailProps> = ({ name, emailAddress, content }) => {
  const previewText = `Message from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body className={styles.email}>
        <Container className={styles.email__container}>
          <Heading>
            <strong>{name}</strong> left a message from CV-website!
          </Heading>

          <Text>Here is the message:</Text>

          <Text className={styles.email__content}>{content}</Text>

          <Hr />
          <Text>
            This message was sent by{' '}
            <span className={styles.email__contacts}>{name}</span>. You can
            contact him through his email{' '}
            <span className={styles.email__contacts}>{emailAddress}</span>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
