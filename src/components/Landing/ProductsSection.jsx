import React, { useState } from "react";
import {
    Container,
    Typography,
    Tabs,
    Tab,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
} from "@mui/material";
import { productCategories } from "../../utils/mocks";

export default function ProductsSection() {
  const [tab, setTab] = useState(productCategories[0].key);
  const currentCategory = productCategories.find((c) => c.key === tab);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Tienda
      </Typography>
      <Tabs
        value={tab}
        onChange={(e, newVal) => setTab(newVal)}
        centered
        sx={{ mb: 4 }}
      >
        {productCategories.map((c) => (
          <Tab key={c.key} value={c.key} label={c.label} />
        ))}
      </Tabs>
      <Grid container spacing={4}>
        {currentCategory.items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card sx={{ height: "100%", width: 250, display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="180" image={item.image} alt={item.name} sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
              }} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $ {item.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Añadir al carrito</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}