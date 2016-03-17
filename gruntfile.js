'use strict';

module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                files: {
                    'dist/ph-icons.min.css': 'dist/ph-icons.css'
                }
            }
        },
        webfont: {
            icons: {
                src: 'src/icons/*.svg',
                dest: 'build',
                options: {
                    templateOptions: {
                        baseClass: 'ph',
                        classPrefix: 'ph-',
                        mixinPrefix: 'ph-'
                    },
                    font: 'ph-icons',
                    stylesheet: 'scss',
                    htmlDemo: true,
                    htmlDemoTemplate: 'src/demo.template.html',
                    destHtml: './',
                    types: 'eot,woff,ttf,svg'
                }
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/ph-icons.css': 'src/ph-icons.scss'
                }
            }
        },
        copy: {
            build: {
                files: [
                    { src: '*.eot',  dest: './dist/', expand: true, cwd: 'build' },
                    { src: '*.ttf',  dest: './dist/', expand: true, cwd: 'build' },
                    { src: '*.woff', dest: './dist/', expand: true, cwd: 'build' }
                ]
            }
        }
    });

    grunt.registerTask('default', 'build');
    grunt.registerTask('build', ['webfont', 'sass', 'cssmin','copy:build']);
};