import React, { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

export type ShopProps = {
  shopData: { [key: string]: any };
  isLoading: boolean;
};

const Shop: FC<ShopProps> = props => {
  const { shopData, isLoading } = props;

  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4" component="h2">
          Shop Info
        </Typography>
      </Box>
      <Box mb={2}>
        {isLoading ? (
          <Box display="flex" justifyContent="center" m={1} p={1}>
            <CircularProgress />
          </Box>
        ) : (
          <Paper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    店名
                  </TableCell>
                  <TableCell>{shopData.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    住所
                  </TableCell>
                  <TableCell>{shopData.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    URL
                  </TableCell>
                  <TableCell>
                    <a
                      href={shopData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {shopData.url}
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        )}
      </Box>

      <Box display="flex" flexDirection="row-reverse">
        <p>
          <Link to="/">TOPへ戻る</Link>
        </p>
      </Box>
    </div>
  );
};

export default Shop;
