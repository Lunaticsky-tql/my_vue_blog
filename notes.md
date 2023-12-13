# 订正

1

```python
    def verify_jwt(token):
        try:
            payload = jwt.decode(
                token,
                current_app.config['SECRET_KEY'],
                algorithms=['HS256'])
        except (jwt.exceptions.ExpiredSignatureError, jwt.exceptions.InvalidSignatureError) as e:
            # Token过期，或被人修改，那么签名验证也会失败
            return None
        return User.query.get(payload.get('user_id'))
```
此处不需要`encode('utf-8')`

2.
`TypeError: Query.paginate() takes 1 positional argument but 3 were given`
如报错所述，全换成可选参数形式

3.
`AttributeError: 'Engine' object has no attribute 'execute'`
```python
        # 获取 follower 开始关注该用户的时间
        # res = db.engine.execute(
        #     "select * from followers where follower_id={} and followed_id={}".
        #     format(item['id'], user.id))
        with db.engine.connect() as con:
            res = con.execute(text(
                "select * from followers where follower_id={} and followed_id={}".
                format(item['id'], user.id)))
```