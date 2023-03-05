import { useState } from 'react';
import { Form, Button, InputGroup, Container } from 'react-bootstrap';

export default function SearchForm({ label = '', placeholder = '', button = '검색' }) {
  const [searchValue, setSearchValue] = useState('');
  const [isFormError, setFormError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setFormError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue.length <= 0) {
      setFormError(true);
      return;
    }

    setFormError(false);
    console.log(searchValue);
  };

  return (
    <Container>
      <Form className="m-5" onSubmit={handleSubmit}>
        <Form.Group className="text-center">
          {label && <Form.Label className="d-block">{label}</Form.Label>}
          <InputGroup size="lg">
            <Form.Control
              type="search"
              placeholder={placeholder}
              value={searchValue}
              isInvalid={isFormError}
              onChange={handleChange}
            />
            <Button variant="primary" type="submit">
              {button}
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
}
