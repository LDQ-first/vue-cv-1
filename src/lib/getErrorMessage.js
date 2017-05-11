const map = {
    125: '电子邮箱地址无效',
    202: '用户名已被占用',
    210:  '用户名和密码不匹配',
    211:  '找不到该用户',
    217: '无效的用户名',
    216: '未验证邮箱地址',
    unknown:  '注册失败，请稍后再试'
}

export default function({code}) {
    console.log(code);
    return map[code] || map.unknown;
}