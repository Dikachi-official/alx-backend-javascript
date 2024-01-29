/**
 * Contains the miscellaneous route handlers.
 * @author Samuel ayano <https://github.com/onaya7>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
