import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imgUrl, setImgUrl] = useState('');

  const handleViewImage = (url: string): void => {
    setImgUrl(url);
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={3} spacing="2.8571rem">
        {cards.map(card => {
          return <Card key={card.id} data={card} viewImage={handleViewImage} />;
        })}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage isOpen={isOpen} imgUrl={imgUrl} onClose={onClose} />
      )}
    </>
  );
}
