// export const Education = () => {

// }

// export default Education;

import {
	Box,
	Card,
	CardBody,
	Container,
	Divider,
	HStack,
	Heading,
	Image,
	Stack,
	Text
} from "@chakra-ui/react";
import { Fade } from "react-reveal";


export const Education = ({ color }) => {
	return (
		<>
			<Container maxW={"3xl"} id="education">
				<Stack
					as={Box}
					textAlign={"center"}
					spacing={{ base: 8, md: 14 }}
					pb={{ base: 20, md: 36 }}
				>
					<Stack align="center" direction="row" p={4}>
						<HStack mx={4}>
							<Text color={`${color}.400`} fontWeight={800}>
								02
							</Text>
							<Text fontWeight={800}>Education</Text>
						</HStack>
						<Divider orientation="horizontal" />
					</Stack>
					<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
					<Fade bottom>
							<Card
								direction={{ base: "column", sm: "row" }}
								overflow="hidden"
								variant="outline"
							>
								<Image
									objectFit="scale-down"
									maxW={{ base: "100%", sm: "200px" }}
									src="/assets/coding_dojo_blue.svg"
									alt="Caffe Latte"
								/>

								<Stack>
									<CardBody>
										<Heading size="md">Coding Dojo</Heading>
										<Text py="2">
											12-week intensive coding boot camp specializing in full stack development in Python, Java, and JavaScript (MERN).

										</Text>
										<Text py="2">Bellevue, Washington / Online</Text>

									</CardBody>
								</Stack>
							</Card>
						</Fade>
						<Fade>
							<Card
								direction={{ base: "column", sm: "row" }}
								overflow="hidden"
								variant="outline"
							>
								<Image
									// boxSize="150px"
									objectFit="scale-down"
									maxW={{ base: "100%", sm: "200px" }}
									src="/assets/uw-logo.png"
									alt="Caffe Latte"
								/>

								<Stack>
									<CardBody>
										<Heading size="md">University of Washington</Heading>

										<Text py="2">
											Bachelor's of Science in Molecular, Cellular, and Developmental Biology, Minor in Chemistry.
										</Text>
										<Text py="2">Seattle, Washington</Text>
									</CardBody>
								</Stack>
							</Card>
						</Fade>

					</Stack>
				</Stack>
			</Container>
		</>
	);
};

export default Education;
