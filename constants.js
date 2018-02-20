//*** Code from : https://www.codeproject.com/Articles/996559/URL-shortener-in-Node-js-plus-Express-js-plus-MySQ
exports.root_url = "http://localhost:3500/";
exports.min_vanity_length = 4;
exports.num_of_urls_per_hour = 50;

exports.get_query = 'SELECT * FROM urls WHERE segment = {SEGMENT}';
exports.add_query = 'INSERT INTO urls SET url = {URL}, segment = {SEGMENT}, ip = {IP}';
exports.check_url_query = 'SELECT * FROM urls WHERE url = {URL}';
exports.update_views_query = 'UPDATE urls SET num_of_clicks = {VIEWS} WHERE id = {ID}';
exports.insert_view = 'INSERT INTO stats SET ip = {IP}, url_id = {URL_ID}, referer = {REFERER}';
exports.check_ip_query = 'SELECT COUNT(id) as counted FROM urls WHERE datetime_added >= now() - INTERVAL 1 HOUR AND ip = {IP}';

exports.host = '127.0.0.1';
exports.user = 'root';
exports.password = '';
exports.database = 'urlsh_db';