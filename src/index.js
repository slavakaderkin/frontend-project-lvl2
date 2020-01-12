import fs from 'fs';

export default (path1, path2) => {
    const data1 = JSON.parse(fs.readFileSync(fs.realpathSync(path1)));
    const data2 = JSON.parse(fs.readFileSync(fs.realpathSync(path2)));

    const result = 
};