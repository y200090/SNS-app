import { Button, Card, CardBody, Container, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSupabaseAuth } from '../hooks/useSupabaseAuth'

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { signIn } = useSupabaseAuth();
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    signIn(email, password);
  };
  
  return (
    <>
      <Container maxW={'md'}>
        <VStack>
          <VStack>
            <Heading
              as={'h1'}
            >
              ログインページ
            </Heading>
          </VStack>

          <Card bg={'red.100'}>
            <CardBody>
              <form onSubmit={onSubmit}>
                <VStack>
                  <FormControl>
                    <FormLabel>
                      メールアドレス
                    </FormLabel>
                    <Input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      パスワード
                    </FormLabel>
                    <Input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </FormControl>
                  <Button type='submit'>
                    ログイン
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </>
  )
}

export default Login