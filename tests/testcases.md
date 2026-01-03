| Description | Input | Output |
| --- | --- | --- |
| Simple increment of a normal day | 15-03-2021 | 16-03-2021 |
| Increment of the first day of a month | 01-03-2021 | 02-03-2021 |

| Increment of the last day of Feb in a non-leap year | 28-02-2021 | 01-03-2021 |
| Increment of the last day of a 30-days month  | 30-11-2020 | 01-12-2020 |
| Increment of the last day of a 31-days month  | 31-10-2020 | 01-11-2020 |

| Increment of the last day in an year of 4-digits  | 31-12-2020 | 01-01-2021 |
| Increment of the last day in an year of 3-digits  | 31-12-0419 | 01-01-0420 |
| Increment of the last day in an year of 2-digits  | 31-12-0019 | 01-01-0020 |
| Increment of the last day in an year of 1-digits  | 31-12-0009 | 01-01-0010 |

| Increment of the last day to complete a decade  | 31-12-2029 | 01-01-2030 |
| Increment of the last day to complete a century  | 31-12-2299 | 01-01-2300 |
| Increment of the last day to complete a millennium  | 31-12-2999 | 01-01-3000 |

| Increment of second last day of feb in a leap year  | 28-02-2020 | 29-02-2020 |
| Increment of last day of feb in a leap year  | 29-02-2020 | 01-03-2020 |

| Invalid date : day is 0  | 00-10-2000  | "Invalid Date" |
| Invalid date : month is 0  | 10-00-2000  | "Invalid Date" |
| Invalid date : year is 0  | 01-10-0000  | "Invalid Date" |
| Invalid date : day, month is 0  | 00-00-2000  | "Invalid Date" |
| Invalid date : month, year is 0  | 01-00-0000  | "Invalid Date" |
| Invalid date : day, year is 0  | 00-10-0000  | "Invalid Date" |
| Invalid date : day, month, year is 0  | 00-00-0000  | "Invalid Date" |

| Invalid date : day is more than 31 for 31-days month  | 32-10-2000  | "Invalid Date" |
| Invalid date : day is more than 30 for 30-days month  | 31-09-2000  | "Invalid Date" |
| Invalid date : day is more than 28 for feb in a non-leap year  | 29-02-2025  | "Invalid Date" |
| Invalid date : day is more than 29 for feb in a leap year | 30-02-2020  | "Invalid Date" |

| Invalid date : month is greater than 12 | 01-13-2043 | "Invalid Date" |
| Invalid date : After increment, year is greater than 4-digits | 31-12-9999 | "Invalid Date" |
