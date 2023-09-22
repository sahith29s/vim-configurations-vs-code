import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, VStack } from '@chakra-ui/react'

import axios from "axios"
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'

const Signup = () => {
    const [show, setShow] = useState(false)
    const [confShow, setConfShow] = useState(false)
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pic, setPic] = useState("")
    const [loading, setLoading] = useState("")
    const toast = useToast()
    const history = useHistory()


    const postDetails = (pics) => {
        setLoading(true);
        if (pic === undefined) {
            toast({
                title: "Please select an Image!",
                // description: 5000,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            return
        }

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData()
            data.append("file", pics)
            data.append("upload_preset", "chat-mern-road")
            data.append("cloud_name", "dpm6uveua")
            fetch("https://api.cloudinary.com/v1_1/dpm6uveua/image/upload", {
                method: "post",
                body: data
            }).then((res) => res.json())
                .then(data => {
                    setPic(data.url.toString())
                    // console.log(data.url.toString())
                    console.log(data);
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setLoading(false)
                })
        }
        else {
            toast({
                title: "Please select an Image!",
                // description: 5000,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            setLoading(false);
            return;
        }
    }

    const submitHandler = async () => {
        setLoading(true)
        if (!name || !email || !password || !confirmPassword) {
            toast({
                title: "Please select an Image!",
                // description: 5000,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            setLoading(false)
            return
        }

        if (password !== confirmPassword) {
            toast({
                title: "Please select an Image!",
                // description: 5000,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            return
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            }
            const { data } = await axios.post("http://localhost:5000/api/user", { name, email, password, pic }, config)
            toast({
                title: "Registration is successful",
                // description: 5000,
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })

            localStorage.setItem("userInfo" , JSON.stringify(data))
            setLoading(false)
            history.push("/chats")


        } catch (error) {

        }
    };
    return (
        <VStack spacing="5px" color="black">
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter Your Name"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <InputRightElement>

                        <Button backgroundColor="transparent" h="1.75rem" size={"sm"} onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>


                </InputGroup>
            </FormControl>

            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={confShow ? "text" : "password"}
                        placeholder="Enter Your Name"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <InputRightElement>
                        <Button backgroundColor="transparent" h="1.75rem" size={"sm"} onClick={() => setConfShow(!confShow)}>
                            {confShow ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic'>
                <FormLabel>Upload your picture</FormLabel>
                <Input
                    type='file'
                    accept='image/*'
                    paddingTop="4px"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button
                isLoading={loading}
                colorScheme='blue'
                width="100%"
                marginTop="15px"
                onClick={submitHandler}>
                Sign Up
            </Button>


        </VStack>
    )
}

export default Signup