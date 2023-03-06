import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function SearchForm({ label = '', placeholder = '', button = '검색' }) {
  const [searchValue, setSearchValue] = useState('');
  const [isFormError, setFormError] = useState(false);

  const goSearch = () => {
    if (searchValue.length <= 0) {
      setFormError(true);
      return;
    }

    console.log('search: ', searchValue);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    goSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      goSearch();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setFormError(false);
  };

  return (
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
            onKeyDown={handleKeyDown}
          />
          <Button variant="primary" type="submit">
            {button}
          </Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}
