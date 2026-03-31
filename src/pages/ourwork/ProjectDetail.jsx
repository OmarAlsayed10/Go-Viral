import { useParams, Link } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Carousel,
  IconButton,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { workItems } from "../../data/portfolio";
import { useTranslation } from "../../i18n/TranslationProvider";

const SectionLabel = ({ children }) => {
  return (
    <Text
      color="primary.500"
      fontSize="xs"
      fontWeight="700"
      textTransform="uppercase"
      letterSpacing="0.12em"
      mb={3}
    >
      {children}
    </Text>
  );
};

const Prose = ({ children }) => {
  return (
    <Text
      color="paragraph.500"
      fontSize={{ base: "sm", md: "md" }}
      lineHeight="1.85"
      maxW="720px"
    >
      {children}
    </Text>
  );
};

const Gallery = ({ images }) => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={4}>
      {images.map((src, i) => (
        <Box key={i} borderRadius="xl" overflow="hidden">
          <Image
            src={src}
            alt=""
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.5s ease"
            _hover={{ transform: "scale(1.04)" }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const project = workItems.find((w) => w.slug === slug);

  const p = (field) => {
    if (!project?.i18nKey) return project?.[field] || "";
    return t(`projects.${project.i18nKey}.${field}`) || project[field];
  };

  if (!project) {
    return (
      <Box bg="accent.800" minH="100vh" pt={32} textAlign="center">
        <Text color="heading.500" fontSize="2xl">
          Project not found
        </Text>
        <Link to="/ourwork">
          <Text
            color="primary.500"
            mt={4}
            _hover={{ textDecoration: "underline" }}
          >
            {t("projectDetail.backToWork")}
          </Text>
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        bg="accent.800"
        position="relative"
        h={{ base: "340px", md: "480px" }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(180deg, rgba(10,15,44,0.3) 0%, rgba(10,15,44,0.92) 100%)"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={{ base: 6, md: 12 }}
          maxW="1200px"
          mx="auto"
        >
          <Text
            color="primary.500"
            fontSize="xs"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.12em"
            mb={2}
          >
            {p("tag")} — {p("client")}
          </Text>
          <Text
            fontFamily="heading"
            fontWeight="800"
            fontSize={{ base: "2xl", md: "4xl" }}
            color="heading.500"
            lineHeight="1.15"
          >
            {p("title")}
          </Text>
        </Box>
      </Box>

      <Box bg="accent.500" py={{ base: 10, md: 16 }} px={{ base: 4, md: 8 }}>
        <Flex
          direction="column"
          gap={{ base: 12, md: 16 }}
          maxW="1200px"
          mx="auto"
        >
          {p("about") && (
            <Box>
              <SectionLabel>{t("projectDetail.about")}</SectionLabel>
              <Prose>{p("about")}</Prose>
            </Box>
          )}

          {p("process") && (
            <Box>
              <SectionLabel>{t("projectDetail.process")}</SectionLabel>
              <Prose>{p("process")}</Prose>
            </Box>
          )}

          {p("marketingPlan") && (
            <Box>
              <SectionLabel>{t("projectDetail.marketingPlan")}</SectionLabel>
              <Prose>{p("marketingPlan")}</Prose>
            </Box>
          )}

          {project.reels && project.reels.length > 0 && (
            <Box>
              <SectionLabel>{t("projectDetail.reels")}</SectionLabel>
              <Gallery images={project.reels} />
            </Box>
          )}

          {project.designs && project.designs.length > 0 && (
            <Box>
              <SectionLabel>{t("projectDetail.designs")}</SectionLabel>
              <Gallery images={project.designs} />
            </Box>
          )}

          {project.photography && project.photography.length > 0 && (
            <Box>
              <SectionLabel>{t("projectDetail.photography")}</SectionLabel>
              <Carousel.Root
                slidesToShow={{ base: 1, md: 2 }}
                slideCount={project.photography.length}
              >
                <Carousel.ItemGroup>
                  {project.photography.map((src, index) => (
                    <Carousel.Item key={index} index={index}>
                      <Box
                        borderRadius="xl"
                        h={{ base: "440px", md: "1000px" }}
                      >
                        <Image
                          src={src}
                          alt=""
                          width="100%"
                          height="100%"
                          objectFit="cover"
                        />
                      </Box>
                    </Carousel.Item>
                  ))}
                </Carousel.ItemGroup>
                <Carousel.Control justifyContent="center" gap="4" mt={4}>
                  <Carousel.PrevTrigger asChild>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      color="primary.500"
                      borderRadius="full"
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      <LuChevronLeft />
                    </IconButton>
                  </Carousel.PrevTrigger>
                  <Carousel.Indicators />
                  <Carousel.NextTrigger asChild>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      color="primary.500"
                      borderRadius="full"
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      <LuChevronRight />
                    </IconButton>
                  </Carousel.NextTrigger>
                </Carousel.Control>
              </Carousel.Root>
            </Box>
          )}

          {project.logos && project.logos.length > 0 && (
            <Box>
              <SectionLabel>{t("projectDetail.logos")}</SectionLabel>
              <Gallery images={project.logos} />
            </Box>
          )}

          <Link to="/ourwork">
            <Flex
              align="center"
              gap={2}
              color="primary.500"
              fontSize="sm"
              fontWeight="600"
              transition="opacity 0.3s"
              _hover={{ opacity: 0.7 }}
              pt={4}
            >
              <Text fontSize="lg">←</Text>
              <Text>{t("projectDetail.backToWork")}</Text>
            </Flex>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectDetail;
