import * as React from "react";
import { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Flex,
  Spacer,
  FormControl,
  Input,
  Button,
  Image,
  View,
  AspectRatio,
  Stack,
  Modal,
  TextArea
} from "native-base";
import * as DocumentPicker from 'expo-document-picker';
export default function ({ id, name, pd, ed }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [doc, setDoc] = useState('');

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
      if (response.type == 'success') {
        console.log(response);
        let { name, size, uri } = response;
        console.log(uri);
        // uri = base64.encode(uri);

        let nameParts = name.split('.');
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType
        };
        console.log(fileToUpload, '...............file')
        setDoc(uri);
      }
    });
    // console.log(result);
    // console.log("Doc: " + doc);
  }
  return (
    <>
      <Modal isOpen={modalVisible}

        onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}
        _web={{
          size: "full",
        }}
        _android={{
          size: "md",
        }}
        theme={{
          colors: {
            background: "#081220",
            text: "#fff",
            primary: "#fff",
            secondary: "#fff",

          },

        }
        }>

        <Modal.Content

          // bg='#081220'
          _web={{
            width: '1500px',
            padding: "10px",
            borderRadius: "10px",
            bg: "#081220",
          }}
          _android={{
            width: '500px',
            padding: "10px",
            borderRadius: "10px",
          }}

        // style={{
        //   backgroundColor: "#081220",
        //   padding: "10px",
        //   borderRadius: "10px",

        // }}
        >
          <Modal.CloseButton />
          <Modal.Body>
            <Heading
              color="#fff"
              bg="#081220"
            >
              Product Receipt
            </Heading>
            <HStack>
              <Flex flexDirection='column' width="40%">
                <FormControl>
                  <FormControl.Label>Upload</FormControl.Label>

                  <Button width='30%' height='30px' color='white' onPress={pickDocument} >
                    <Text color="white">Upload</Text>
                  </Button>
                  {
                    doc && <Image source={{ uri: doc }} marginTop="5" width='100px' height='100px' />
                  }
                  <Box>
                    <Text marginTop={5} marginBottom={4} color='white'>
                      Problem at Hand
                    </Text>
                    <Box alignItems="flex-start" w="100%">
                      <TextArea h='150' w="75%" maxW="300" color='white' />
                    </Box>
                  </Box>
                </FormControl>

              </Flex>
              {/* <Flex flexDirection='column'> */}
              <Flex width='60%' flexDirection='column'>
                <FormControl mt="3">
                  <FormControl.Label>Product Id</FormControl.Label>
                  <Input ref={initialRef} color="white" />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Invoice Number</FormControl.Label>
                  <Input ref={initialRef} color="white" />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Product Name</FormControl.Label>
                  <Input ref={initialRef} color="white" />
                </FormControl>
                <Text marginTop={5} marginBottom={4} color='white'>
                  Warranty validity:
                </Text>
              </Flex>

              {/* </Flex> */}
            </HStack>
          </Modal.Body>
          <Modal.Footer

            bg="#081220"
          >
            <Button.Group style={{
            }} space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                Cancel
              </Button>
              <Button onPress={() => {
                setModalVisible(false);
              }}>
                Submit
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal >

      <Box alignItems="center" justifyContent="center" pt="2">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          bg="#13131A"
          borderWidth="1"
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          mb="4"
        >
          <Box p="2">
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
                rounded="lg"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3} bg="#13131A">
            <HStack space={4} alignContent="center" alignItems="baseline">
              <Heading color="rgb(155, 81, 224)">{name}</Heading>
              <Text
                fontSize="sm"
                _light={{
                  color: "white",
                }}
                _dark={{
                  color: "black",
                }}
                fontWeight="500"
              >
                {id}
              </Text>
            </HStack>
            <Text color="#B8B8CC" fontSize="xs">
              Bengaluru (also called Bangalore) is the center of India's high-tech
              industry.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="rgb(155, 81, 224)"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  Purchase
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  {pd}
                </Text>
              </HStack>
            </HStack>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="rgb(155, 81, 224)"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  Expiry
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  {ed}
                </Text>
              </HStack>
            </HStack>
            <Button
              size="sm"
              color="white"
              borderWidth={1}
              borderColor="rgb(155, 81, 224)"
              bg="transparent"
              colorScheme="rgb(155, 81, 224)"
              onPress={() => { setModalVisible(!modalVisible) }}
            >
              Claim warranty
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
