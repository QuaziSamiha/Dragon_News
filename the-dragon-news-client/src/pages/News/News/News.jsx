import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

function News() {
  const news = useLoaderData();
  console.log(news);
  const { title, details, image_url, category_id } = news;
  return (
    <>
      <section>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/category/${category_id}`}>
              <Button variant="danger">
                <FaArrowLeft /> All News in This Category
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <EditorsInsights />
      </section>
    </>
  );
}

export default News;
