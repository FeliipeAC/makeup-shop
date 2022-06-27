import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useState } from "react";

type Props = {
  handleFilter?: any;
};

type ListItem = {
  id: string;
  label: string;
};

export function Filters({ handleFilter }: Props) {
  const [type, setType] = useState<ListItem | null>(null);
  const [category, setCategory] = useState<ListItem | null>(null);
  const [brand, setBrand] = useState<ListItem | null>(null);

  return (
    <Grid
      container
      columnSpacing={{ xs: 0, sm: 4, md: 3 }}
      rowSpacing={{ xs: 2, sm: 4, md: 3 }}
      alignItems="center"
      style={{ marginBottom: "52px" }}
    >
      <Grid item xs={12} sm={6} lg={3}>
        <Autocomplete
          disablePortal
          options={productTypes}
          renderInput={(params) => <TextField {...params} label="Types" />}
          onChange={(event: any, newValue: any | null) => {
            setType(newValue);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Autocomplete
          disablePortal
          options={productCategories}
          renderInput={(params) => <TextField {...params} label="Categories" />}
          onChange={(event: any, newValue: any | null) => {
            setCategory(newValue);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Autocomplete
          disablePortal
          options={productBrands}
          renderInput={(params) => <TextField {...params} label="Brands" />}
          onChange={(event: any, newValue: any | null) => {
            setBrand(newValue);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item>
            <Button
              variant="outlined"
              size="large"
              onClick={() => handleFilter()}
            >
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              disableElevation
              disabled={!type && !brand && !category}
              onClick={() => handleFilter({ type, category, brand })}
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const productTypes: ListItem[] = [
  {
    id: "blush",
    label: "Blush",
  },
  {
    id: "bronzer",
    label: "Bronzer",
  },
  {
    id: "eyebrow",
    label: "Eyebrow",
  },
  {
    id: "eyeliner",
    label: "Eyeliner",
  },
  {
    id: "eyeshadow",
    label: "Eyeshadow",
  },
  {
    id: "foundation",
    label: "Foundation",
  },
  {
    id: "lip_liner",
    label: "Lip liner",
  },
  {
    id: "lipstick",
    label: "Lipstick",
  },
  {
    id: "mascara",
    label: "Mascara",
  },
  {
    id: "nail_polish",
    label: "Nail polish",
  },
];

const productCategories: ListItem[] = [
  {
    id: "bb_cc",
    label: "Bb Cc",
  },
  {
    id: "contour",
    label: "Contour",
  },
  {
    id: "concealer",
    label: "Concealer",
  },
  {
    id: "cream",
    label: "Cream",
  },
  {
    id: "gel",
    label: "Gel",
  },
  {
    id: "highlighter",
    label: "Highlighter",
  },
  {
    id: "liquid",
    label: "Liquid",
  },
  {
    id: "lipstick",
    label: "Lipstick",
  },
  {
    id: "lip_gloss",
    label: "Lip Gloss",
  },
  {
    id: "lip_stain",
    label: "Lip Stain",
  },
  {
    id: "mineral",
    label: "Mineral",
  },
  {
    id: "pallete",
    label: "Pallete",
  },
  {
    id: "pencil",
    label: "Pencil",
  },
  {
    id: "powder",
    label: "Powder",
  },
];

const productBrands: ListItem[] = [
  { id: "almay", label: "almay" },
  { id: "alva", label: "alva" },
  { id: "anna_sui", label: "anna sui" },
  { id: "annabelle", label: "annabelle" },
  { id: "benefit", label: "benefit" },
  { id: "boosh", label: "boosh" },
  { id: "burts_bees", label: "burt's bees" },
  { id: "butter_london", label: "butter london" },
  { id: "cest_moi", label: "c'est moi" },
  { id: "cargo_cosmetics", label: "cargo cosmetics" },
  { id: "china_glaze", label: "china glaze" },
  { id: "clinique", label: "clinique" },
  { id: "coastal_classic_creation", label: "coastal classic creation" },
  { id: "colourpop", label: "colourpop" },
  { id: "covergirl", label: "covergirl" },
  { id: "dalish", label: "dalish" },
  { id: "deciem", label: "deciem" },
  { id: "dior", label: "dior" },
  { id: "dr_hauschka", label: "dr. hauschka" },
  { id: "elf.", label: "e.l.f." },
  { id: "essie", label: "essie" },
  { id: "fenty", label: "fenty" },
  { id: "glossier", label: "glossier" },
  { id: "green_people", label: "green people" },
  { id: "iman", label: "iman" },
  { id: "loreal", label: "l'oreal" },
  { id: "lotus_cosmetics_usa", label: "lotus cosmetics usa" },
  { id: "maias_mineral_galaxy", label: "maia's mineral galaxy" },
  { id: "marcelle", label: "marcelle" },
  { id: "marienatie", label: "marienatie" },
  { id: "maybelline", label: "maybelline" },
  { id: "milani", label: "milani" },
  { id: "mineral_fusion", label: "mineral fusion" },
  { id: "misa", label: "misa" },
  { id: "mistura", label: "mistura" },
  { id: "moov", label: "moov" },
  { id: "nudus", label: "nudus" },
  { id: "nyx", label: "nyx" },
  { id: "orly", label: "orly" },
  { id: "pacifica", label: "pacifica" },
  { id: "penny_lane_organics", label: "penny lane organics" },
  { id: "physicians_formula", label: "physicians formula" },
  { id: "piggy_paint", label: "piggy paint" },
  { id: "pure_anada", label: "pure anada" },
  { id: "rejuva_minerals", label: "rejuva minerals" },
  { id: "revlon", label: "revlon" },
  { id: "sally_bs_skin_yummies", label: "sally b's skin yummies" },
  { id: "salon_perfect", label: "salon perfect" },
  { id: "sante", label: "sante" },
  { id: "sinful_colours", label: "sinful colours" },
  { id: "smashbox", label: "smashbox" },
  { id: "stila", label: "stila" },
  { id: "suncoat", label: "suncoat" },
  { id: "w3llpeople", label: "w3llpeople" },
  { id: "wet_n_wild", label: "wet n wild" },
  { id: "zorah", label: "zorah" },
  { id: "zorah_biocosmetiques", label: "zorah biocosmetiques" },
];
