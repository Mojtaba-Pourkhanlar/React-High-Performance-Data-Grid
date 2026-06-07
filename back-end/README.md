# Backend API Documentation

This directory contains the core logic for the asset management and trading system. Below are the available endpoints and their specifications.

## API Endpoints

| Address       | Fields                                                                                                                             | Optional Query Strings | Description                        |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :--------------------------------- |
| `/assets`     | `title`, `trade_symbol`                                                                                                            | -                      | Get list of all assets             |
| `/assets/:id` | `title`, `trade_symbol`                                                                                                            | -                      | Get a specific asset by its ID     |
| `/trades`     | `open_price`, `high_price`, `low_price`, `real_close_price`, `close_price`, `volume`, `value`, `trade_count`, `close_price_change` | `asset_id`             | Get latest asset trades            |
| `/bidasks`    | `orders`, `orders.order_rank`                                                                                                      | `asset_id`             | Get latest supply and demand table |

---

## Data Schema Details

### Asset Object

- `title`: Company name (نام شرکت)
- `trade_symbol`: Market symbol (نماد)

### Trade Object

- `open_price`: First price of the session
- `high_price`: Highest recorded price
- `low_price`: Lowest recorded price
- `real_close_price`: Last traded price
- `close_price`: Official closing price
- `volume`: Total traded volume
- `value`: Total transaction value
- `trade_count`: Total number of transactions
- `close_price_change`: Percentage change in price

### Bid/Ask (Order Book)

- `orders`: Collection of bid/ask entries
- `orders.order_rank`: Priority or rank in the order book
