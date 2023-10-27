import {
  Container,
  Grid,
  Flex,
  Card,
  AspectRatio,
  Heading,
  Text,
  TextField,
  Select,
  Checkbox,
  Button,
  Separator,
} from "@radix-ui/themes"

const Input = ({ name }) => {
  return (
    <>
      <Text as="label">{name}</Text>
      <TextField.Root>
        {/* <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot> */}
        <TextField.Input placeholder="Enter..." name={name} />
      </TextField.Root>
      <Text as="span" color="ruby">
        required *
      </Text>
    </>
  )
}

const Dropdown = ({ name, options }) => {
  return (
    <Select.Root name={name}>
      <Select.Trigger />
      <Select.Content position="popper">
        {options.map((option) => (
          <Select.Item key={option.id} value={option.value}>
            {option.label}
          </Select.Item>
        ))}
        <Select.Item value="apple">Apple</Select.Item>
      </Select.Content>
    </Select.Root>
  )
}

function App() {
  const order = {
    title: "Apples",
    price: 1.99,
    imageURL: "https://images.heb.com/is/image/HEBGrocery/001422652-1",
  }

  const countryOptions = [
    { id: 1, value: "usa", label: "United States" },
    { id: 2, value: "canada", label: "Canada" },
    { id: 3, value: "mexico", label: "Mexico" },
  ]
  return (
    <Container>
      <Grid columns="2" gap="3">
        <Flex direction="column" gap="3">
          <Text>{order.title}</Text>
          <Heading>${order.price}</Heading>
          <AspectRatio ratio={1 / 1}>
            <img
              src={order.imageURL}
              alt={`${order.name}-image`}
              style={{
                objectFit: "cover",
                width: "50%",
                height: "50%",
                borderRadius: "var(--radius-2)",
              }}
            />
          </AspectRatio>
          <Flex gap="3">
            <Text>
              <a href="#">Stripe</a>
            </Text>
            <Separator orientation="vertical" />
            <Text>
              <a href="#">Terms</a>
            </Text>
            <Text>
              <a href="#">Privacy</a>
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="3">
          <Button>Apple Pay</Button>
          <Separator my="3" size="4" />
          <Heading>Shipping Information</Heading>
          <Input name="email" />
          <Input name="name" />
          <Dropdown name="country" options={countryOptions} />
          <Input name="address" />
          <a href="#">Enter address manually</a>
          <Heading>Payment Method</Heading>
          <Flex direction="row" gap="3">
            <Card>
              <Text as="div" size="2" weight="bold">
                Card
              </Text>
            </Card>
            <Card>
              <Text as="div" size="2" weight="bold">
                Cash App Pay
              </Text>
            </Card>
            <Card>
              <Text as="div" size="2" weight="bold">
                Affirm
              </Text>
            </Card>
            <Card>
              <Text as="div" size="2" weight="bold">
                ...
              </Text>
            </Card>
          </Flex>
          <Input name="card number" />
          <Input name="expiration" />
          <Input name="cvc" />
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox defaultChecked /> Billing address same as shipping
            </Flex>
          </Text>
          <Button>Pay</Button>
        </Flex>
      </Grid>
    </Container>
  )
}

export default App
