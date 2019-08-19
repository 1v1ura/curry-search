import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Rest } from "../../actions/getShops/getShopsConstants";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

export type ShopListProps = {
  searchText: string;
  list: Rest[];
  isLoading: boolean;
};

const ShopList: FC<ShopListProps> = props => {
  const { list, isLoading } = props;

  return (
    <>
      {list.length > 0 ? <Divider style={{ margin: "30px 0" }} /> : false}

      {isLoading ? (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <CircularProgress />
        </Box>
      ) : (
        list.map(shop => (
          <Box key={shop.id} mb={1}>
            <Link to={`/${shop.id}/info`} style={{ textDecoration: "none" }}>
              <Card>
                <CardContent style={{ padding: "10px 8px" }}>
                  <Typography component="p">{shop.name}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))
      )}
    </>
  );
};

export default ShopList;
