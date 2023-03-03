import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.800" w="auto" h="auto">
        <ModalBody>
          <Image src={imgUrl} maxW={900} maxH={600} />
        </ModalBody>
        <ModalFooter whiteSpace="nowrap" justifyContent="flex-start">
          <Link href={imgUrl} color="gray.50" fontSize={14}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
