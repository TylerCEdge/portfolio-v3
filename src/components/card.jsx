import React from 'react'
import { Box, Card, Image, Heading, Text, Button, Link } from 'rebass'

const Test = props => (
  <Box>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}
    >
      <Image
        alt={props.image.replace('.png', '')}
        src={require('../images/' + props.image)}
      />
      <Box px={2}>
        <Heading as="h3">{props.name}</Heading>
        <Text fontSize={0}>{props.summary}</Text>
        <br></br>
        <Button variant="primary" mr={2}>
          <Link variant="nav" target="blank" href={props.url}>
            View
          </Link>
        </Button>
        <Button variant="primary" mr={2}>
          <Link
            variant="nav"
            target="blank"
            href="https://github.com/TylerCEdge"
            className="icon fa-github"
          >
            {' '}
            Github
          </Link>
        </Button>
      </Box>
    </Card>
    <hr></hr>
  </Box>
)

export default Test

// onClick={() => props.handleClick(props.id)}
