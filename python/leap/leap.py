def is_leap_year(year):
    if year%4==0:
        return False if year%100==0 and not year%400==0 else True
    return False
