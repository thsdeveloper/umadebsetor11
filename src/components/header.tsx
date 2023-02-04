import React from 'react'
import {useColorMode, IconButton, Box, Flex, Image, Text} from '@chakra-ui/react'
import Link from 'next/link'
import {FiMoon, FiSun} from 'react-icons/fi';
import image from '@/assets/images/logo---marca-umadeb-2022-b.png'

const Header = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    const icon = colorMode === "light" ? (<FiMoon/>) : (<FiSun/>);
    return (
        <Flex
            as='header'
            bg={colorMode === 'light' ? 'gray.800' : 'gray.100'}
            py={4}
            px={6}
            justifyContent='space-between'
        >
            <Link href='/'>
                <Image
                    src={image.src}
                    width={150}
                    alt='Logo UMADEB Setor 11'
                />
            </Link>
            <Box display='flex'>
                <Link href='/users'>
                    <Text color={colorMode === 'light' ? 'white' : 'black'} mr={4}>Usuários</Text>
                </Link>
                <Link href='/eventos'>
                    <Text color={colorMode === 'light' ? 'white' : 'black'} mr={4}>Eventos</Text>
                </Link>
                <Link href='/contato'>
                    <Text color={colorMode === 'light' ? 'white' : 'black'}>Contato</Text>
                </Link>
            </Box>
            <Box>
                <IconButton
                    aria-label='Toggle dark mode'
                    icon={icon}
                    onClick={toggleColorMode}
                />
            </Box>
        </Flex>
    )
}

export default Header
