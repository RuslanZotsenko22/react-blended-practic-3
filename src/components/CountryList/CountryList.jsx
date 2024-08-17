import { Grid, GridItem } from '..';

export const CountryList = ({ countries }) => {
  // console.log(countries);
  return (
    <Grid>
      {countries.map(({ country, id, flag }) => (
        <GridItem key={id}>
          <img src={flag} alt={country} />
        </GridItem>
      ))}
    </Grid>
  );
};

// id, capital, country, flag, population;
