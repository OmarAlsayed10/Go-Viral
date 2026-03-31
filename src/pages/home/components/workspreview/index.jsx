import { Link } from "react-router-dom";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import Section from "../../../../sharedComponents/section";
import { Button } from "../../../../sharedComponents/button";
import { useTranslation } from "../../../../i18n/TranslationProvider";
import { workItems } from "../../../../data/portfolio";
import WorkCard from "../../../../components/workcard";
import SectionHeading from "../../../../components/sectionheading";
const WorksPreview = () => {
  const { t } = useTranslation();
  const featured = workItems.slice(0, 3);
  return (
    <Section bg="accent.800" py={{ base: 16, md: 24 }}>
      <Flex
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap={6}
        mb={{ base: 10, md: 14 }}
        animation="heroIn 1.2s 0.1s cubic-bezier(0.16,1,0.3,1) both"
      >
        <SectionHeading
          eyebrow={t("home.previewEyebrow")}
          title={t("home.previewTitle")}
          highlight={t("home.previewHighlight")}
          textAlign="left"
          mb={0}
        />
        <Link to="/ourwork">
          <Button
            variant="gold"
            value={t("home.viewAll")}
            onClick={() => navigate("/ourwork")}
          />
        </Link>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {featured.map((item, i) => (
          <WorkCard key={item.id} item={item} index={i} />
        ))}
      </SimpleGrid>
    </Section>
  );
};
export default WorksPreview;
