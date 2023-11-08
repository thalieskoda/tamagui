import { useEffect, useState } from "react";
import { Button, Form, H4, SizeTokens, Spinner } from "tamagui";

export const FormCountry = () => {
  const [status, setStatus] = useState("off");

  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <Form
      alignItems="center"
      minWidth={300}
      gap="$2"
      onSubmit={() => setStatus("submitting")}
      padding="$8">
      <H4>{status[0].toUpperCase() + status.slice(1)}</H4>
      <Form.Trigger asChild disabled={status !== "off"}>
        <Button icon={status === "submitting" ? () => <Spinner /> : undefined}>
          Submit
        </Button>
      </Form.Trigger>
    </Form>
  );
};
