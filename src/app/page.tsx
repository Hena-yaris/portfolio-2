import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function Home() {
  return (
     <main className="pt-32">
          <Container>
              <SectionTitle
               subtitle="Foundation"
               title= "Building a scalable portfolio"/>
                    <Button>
                          Get Started
                    </Button>
          </Container>
     </main>
  );
}
