import os


def path_exists(path):
    return os.path.exists(path)


def make_dirs(path):
    if not path_exists(path):
        os.makedirs(path)


def is_folder(path):
    return os.path.isdir(path)
    pass


def is_file(path):
    return os.path.isfile(path)
    pass


def get_filename(path, has_ext=True):
    res = os.path.basename(path)
    if not has_ext:
        res = res.split('.', 1)[0]
    return res


def get_cwd():
    return os.getcwd()