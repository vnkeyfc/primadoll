import csv


def write_csv(out_path, rows):
    writer = csv.writer(
        open(out_path, 'wb'),
        delimiter=',', quotechar='"',
        quoting=csv.QUOTE_MINIMAL)

    for row in rows:
        writer.writerow([c.encode('utf8') for c in row])