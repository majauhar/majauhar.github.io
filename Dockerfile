FROM ruby:3.2-alpine

# Install build deps Jekyll commonly needs
RUN apk add --no-cache \
    build-base \
    gcc \
    musl-dev \
    make \
    git \
    nodejs \
    npm

WORKDIR /site

# Copy Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install bundler & gems
RUN gem install bundler && bundle install

EXPOSE 4000
