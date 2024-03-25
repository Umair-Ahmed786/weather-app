import React from "react";

import { useForm } from "@mantine/form";
import { Button, Grid, TextInput } from "@mantine/core";
import { RiSearchLine } from "react-icons/ri";

function LocationInput({ value, onChange, handleLocation }) {
  const form = useForm({
    initialValues: {
      location: "",
    },
  });
  return (
    <form onSubmit={form.onSubmit(({ location }) => handleLocation(location))}>
      <Grid>
        <Grid.Col span={9}>
          <TextInput
            w="100%"
            value={value}
            onChange={(e) => {
              onChange(e.currentTarget.value);
            }}
            rightSection={<RiSearchLine />}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Button fullWidth type="submit">
            Search
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}

export default LocationInput;
