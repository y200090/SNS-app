import { Box, Button, Card, CardBody, Flex, FormControl, FormLabel, Heading, Input, Link as ChakraLink, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <Flex
        h='100%'
        w='100%'
        p='5'
        justify='space-between'
      >
        <Box>
          Hero Image
        </Box>

        <VStack>
          <VStack>
            <VStack>
              <Heading
                as={'h1'}
              >
                登録
              </Heading>
            </VStack>

            <Card>
              <CardBody>
                <form>
                  <VStack>
                    <FormControl>
                      <FormLabel htmlFor='email'>
                        メールアドレス
                      </FormLabel>
                      <Input type='text' id='email' />
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor='password'>
                        パスワード
                      </FormLabel>
                      <Input type='password' id='password' />
                    </FormControl>

                    <Button>
                      登録
                    </Button>
                  </VStack>
                </form>
              </CardBody>
            </Card>
          </VStack>

          <Box>
            <Text>
              アカウントを持っている場合
            </Text>
            <Button as={RouterLink} to='/login'>
              ログイン
            </Button>
          </Box>
        </VStack>
      </Flex>
    </>
  )
}

export default Landing