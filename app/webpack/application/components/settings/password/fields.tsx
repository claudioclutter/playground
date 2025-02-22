import { faLock } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { useState } from "react";

import { Errors } from "@root/app_schema";

import { Button, Form } from "tights";

import { Field } from "@application/components/field";
import { Flashes } from "@application/components/flashes";

export const Fields: React.FC<{
  loading: boolean;
  errors?: Errors;
  save(variables: { current: string; replacement: string }): void;
}> = ({ loading, errors, save }) => {
  const [current, setCurrent] = useState<string>("");
  const [replacement, setReplacement] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    save({
      current,
      replacement,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Flashes errors={errors} />

      <Field
        icon={faLock}
        type="password"
        name="current"
        value={current}
        label="Current"
        placeholder="Current"
        errors={errors}
        onValue={setCurrent}
      />

      <Field
        icon={faLock}
        type="password"
        name="replacement"
        value={replacement}
        label="Replacement"
        placeholder="Replacement"
        errors={errors}
        onValue={setReplacement}
      />

      <Form.Field>
        <Form.Control>
          <Button type="submit" disabled={loading} loading={loading} color="primary">
            Change
          </Button>
        </Form.Control>
      </Form.Field>
    </Form>
  );
};
