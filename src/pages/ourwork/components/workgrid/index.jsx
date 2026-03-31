import { SimpleGrid } from "@chakra-ui/react";
import WorkCard from "../../../../components/workcard";
const WorkGrid = ({ items }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {items.map((item, i) => (
        <WorkCard key={item.id} item={item} index={i} />
      ))}
    </SimpleGrid>
  );
};
export default WorkGrid;
