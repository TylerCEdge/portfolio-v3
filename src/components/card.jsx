import React from 'react'
import { Box, Card, Image, Heading, Text } from 'rebass'

const Test = props => (
	<Box>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Image alt={props.image.replace(".png", "")} src={require("../images/" + props.image)} href={props.url} />
      <Box px={2}>
        <Heading as='h3'>
          {props.name}
        </Heading>
        <Text fontSize={0}>
          {props.summary}
        </Text>
      </Box>
    </Card>
  </Box>
)

export default Test

// onClick={() => props.handleClick(props.id)}