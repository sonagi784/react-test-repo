import { Container } from 'react-bootstrap';
import SearchForm from '@/components/home/SearchForm';
import SearchRecent from '@/components/home/SearchRecent';

export default function Home() {
  return (
    <Container>
      <SearchForm label="키워드를 입력하면, 이미지를 찾아드려요" placeholder="키워드" />
      <SearchRecent />
    </Container>
  );
}
